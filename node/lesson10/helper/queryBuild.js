module.exports = {
    queryBuild: (query) => {
        const {
            limit = 20, page = 1, sortBy = 'createdAt', order = 'asc', ...filters
        } = query;

        const keys = Object.keys(filters);
        const orderBy = order === 'asc' ? -1 : 1;
        const filterObject = {};
        const skip = (page - 1) * limit;
        const sort = { [sortBy]: orderBy };
        return {
            filters, keys, limit, filterObject, page, skip, sort
        };
    }
};
