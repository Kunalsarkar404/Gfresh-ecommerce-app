const Product = require('../../../Models/product');

const frontendProductListByCategory = async (req, res) => {
    // Destructure query parameters with default values
    const {
        page,
        max_price,
        min_price,
        order,
        orderby,
        brand,
        size,
        color,
        weight
    } = req.query;

    try {
        // Pagination setup
        const ITEMS_PER_PAGE = 12;
        const pageNumber = parseInt(page) || 1;
        const skip = (pageNumber - 1) * ITEMS_PER_PAGE;

        // Dynamic sorting configuration
        const sortOptions = determineSortOptions(orderby, order);

        // Build comprehensive product query
        const baseQuery = buildProductQuery(req.params.id, {
            min_price,
            max_price,
            weight,
            color,
            size,
            brand
        });

        // Fetch total count and paginated products
        const [totalCountBeforeFilter, productsBeforeFilter] = await Promise.all([
            Product.countDocuments(baseQuery),
            Product.find(baseQuery)
                .sort(sortOptions)
                .skip(skip)
                .limit(ITEMS_PER_PAGE)
        ]);

        // Calculate pagination metadata
        const totalPages = Math.ceil(totalCountBeforeFilter / ITEMS_PER_PAGE);

        // Send response with product list and pagination info
        res.status(200).json({
            status: "success",
            data: productsBeforeFilter,
            totalPages,
            itemsPerPage: ITEMS_PER_PAGE,
            totalItems: totalCountBeforeFilter,
            pageNumber,
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            error: error.message
        });
    }
};

// Helper function to determine sorting options
const determineSortOptions = (orderby, order) => {
    const defaultSort = { selling_price: 1 };

    if (!orderby) return defaultSort;

    const sortMap = {
        'trendingproduct': { trendingproduct: 1 },
        'newarrivedproduct': { newarrivedproduct: 1 },
        'selling_price': { selling_price: order === "ASE" ? 1 : -1 }
    };

    return sortMap[orderby] || defaultSort;
};

// Helper function to build product query
const buildProductQuery = (categoryId, filters) => {
    const query = {
        $or: [
            { parent_category: categoryId },
            { child_category: categoryId }
        ]
    };

    // Price range filter
    if (filters.min_price || filters.max_price) {
        query.selling_price = {};
        if (filters.min_price) query.selling_price.$gte = parseInt(filters.min_price);
        if (filters.max_price) query.selling_price.$lte = parseInt(filters.max_price);
    }

    // Weight filter
    if (filters.weight) {
        const [weightNum, weightType] = filters.weight.split(' ');
        query.weight = weightNum;
        query.weight_type = weightType;
    }

    // Additional filters
    ['color', 'size', 'brand'].forEach(field => {
        if (filters[field]) query[field] = filters[field];
    });

    return query;
};

module.exports = frontendProductListByCategory;