const Product = require("../../../Models/product");

const getFrontendProductListByCategory = async (req, res) => {
    const { page, max_price, min_price, order, orderby, ...filter } = req.query;

    try {
        const categoryId = req.params.id;
        const itemsPerPage = 10;
        const pageNumber = parseInt(page) || 1;
        const skip = (pageNumber - 1) * itemsPerPage;

        // Construct sorting options based on query parameters
        const sortOptions = {};
        if (orderby) {
            if (orderby === "trendingproduct" || orderby === "newarrivedproduct") {
                sortOptions[orderby] = 1;
            }
            if (orderby === "selling_price") {
                sortOptions[orderby] = order === 'ASE' ? 1 : -1;
            }
        }

        // Build base query for finding products by category and price
        const baseQuery = {
            $or: [{ parent_category: categoryId }, { child_category: categoryId }],
            ...(min_price || max_price ? {
                selling_price: {
                    ...(min_price && { $gte: parseInt(min_price) }),
                    ...(max_price && { $lte: parseInt(max_price) })
                }
            } : {})
        };

        // Get total count and products before applying additional filters
        const totalCountBeforeFilter = await Product.countDocuments(baseQuery);
        const productsBeforeFilter = await Product
            .find(baseQuery)
            .sort(sortOptions)
            .skip(skip)
            .limit(itemsPerPage);

        // Apply dynamic attribute filters if present
        const filteredProducts = Object.keys(filter).length > 0
            ? productsBeforeFilter.filter(product =>
                product.dynamicAttributes &&
                Object.entries(filter).every(([key, value]) =>
                    product.dynamicAttributes.some(attributes =>
                        attributes.some(attribute =>
                            String(attribute[key]) === String(value)
                        )
                    )
                )
            )
            : productsBeforeFilter;

        // Prepare response with pagination details
        const totalItems = filteredProducts.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const paginatedProducts = filteredProducts.slice(skip, skip + itemsPerPage);

        res.status(200).json({
            status: "success",
            data: paginatedProducts,
            totalPages,
            itemsPerPage,
            totalItems,
            pageNumber,
        });
    } catch (error) {
        res.status(500).json({ status: "failed", error: error.message });
    }
};

module.exports = getFrontendProductListByCategory;