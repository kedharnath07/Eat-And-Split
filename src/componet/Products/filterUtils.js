export function filterByCategory(items, category) {
    return items.filter((item) => item.category === category);
}

export function filterBySearch(items, query) {
    return items.filter((item) =>
        item.brand.toLowerCase().includes(query.toLowerCase())
    );
}
