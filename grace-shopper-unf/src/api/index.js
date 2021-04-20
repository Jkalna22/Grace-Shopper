export async function fetchProducts() {
    try {
        const response = await fetch(`http://localhost:3000/api/products`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}