export function formatCurrency(value) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
    }).format(value / 100);
}

export function handlePreventDefault(e) {
    e.preventDefault();
}