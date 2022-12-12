const data = [
    {
        id: 1,
        name: "Invicta Men's Pro Diver",
        img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price: 74,
        category: "Dress",
    },
    {
        id: 2,
        name: "Timex Men's Expedition Scout ",
        img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
        price: 40,
        category: "Sport",
    },
    {
        id: 3,
        name: "Breitling Superocean Heritage",
        img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
        price: 200,
        category: "Luxury",
    },
    {
        id: 4,
        name: "Casio Classic Resin Strap ",
        img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
        price: 16,
        category: "Sport",
    },
    {
        id: 5,
        name: "Garmin Venu Smartwatch ",
        img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
        price: 74,
        category: "Casual",
    },
];

const products = document.querySelector(".content__products");
const searchInput = document.querySelector(".search");
const categoriesDiv = document.querySelector(".sidebar__categories");
const priceRange = document.querySelector(".price-range");
const priceValue = document.querySelector(".price-value");

const displayProducts = (filteredProducts) => {
    products.innerHTML = filteredProducts.map(product => `
        <div class="product">
            <img src=${product.img} alt=""/>
            <span class="product__name">${product.name}</span>
            <span class="product__price">${product.price}</span>
        </div>
    `).join("");
};

displayProducts(data);

searchInput.addEventListener("keyup", (e) => {
    const searchingProduct = e.target.value.toLowerCase();

    if (searchingProduct) {
        displayProducts(data.filter(item => item.name.toLowerCase().indexOf(searchingProduct) !== -1));
    } else {
        displayProducts(data);
    }
});

const setCategories = () => {
    const allCategories = data.map(item => item.category);
    const categories = [
        "All",
        ...allCategories.filter((item, i) => {
            return allCategories.indexOf(item) === i;
        }),
    ];

    categoriesDiv.innerHTML = categories.map(category => `
        <div class="category">${category}</div>
    `).join("");

    categoriesDiv.addEventListener("click", (e) => {
        const selectedCategory = e.target.textContent;

        selectedCategory === "All" ? displayProducts(data) : displayProducts(data.filter(item =>
            item.category === selectedCategory));
    });
};

setCategories();