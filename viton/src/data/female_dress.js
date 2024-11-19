const female_data = [
    {
        id: 200,
        title: "T-Shirt",
        description: "A cutting-edge virtual try-on shirt showcasing modern technology. Designed for ultimate comfort and style, perfect for various occasions.",
        category: "womens-dresses",
        price: 49.99,
        discountPercentage: 10.0,
        rating: 4.5,
        stock: 20,
        tags: ["virtual try-on", "modern clothing", "tech-enabled fashion"],
        brand: "TechTrends",
        sku: "VTRYON123",
        weight: 5,
        dimensions: {
            width: 18.0,
            height: 28.0,
            depth: 2.0
        },
        warrantyInformation: "1-year warranty",
        shippingInformation: "Ships in 2 weeks",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 5,
                comment: "Innovative and comfortable!",
                date: "2024-11-10T10:30:00.000Z",
                reviewerName: "Emma Johnson",
                reviewerEmail: "emma.johnson@x.dummyjson.com"
            },
            {
                rating: 4,
                comment: "Good quality, fits well.",
                date: "2024-11-12T15:45:00.000Z",
                reviewerName: "Liam Brown",
                reviewerEmail: "liam.brown@x.dummyjson.com"
            }
        ],
        returnPolicy: "15 days return policy",
        minimumOrderQuantity: 1,
        meta: {
            createdAt: "2024-11-15T10:00:00.000Z",
            updatedAt: "2024-11-15T10:00:00.000Z",
            barcode: "1234567890123",
            qrCode: "https://example.com/qr-code.png"
        },
        images: [
            "https://nymbo-virtual-try-on.hf.space/file=/tmp/gradio/97168750c1cb1570a41d299e14df6a6f0ea12fda/09236_00.jpg"
        ],
        thumbnail: "https://nymbo-virtual-try-on.hf.space/file=/tmp/gradio/97168750c1cb1570a41d299e14df6a6f0ea12fda/09236_00.jpg"
    },
    {
        id: 201,
        title: "Modern Casual Shirt",
        description: "A trendy modern casual shirt perfect for everyday wear. Lightweight and stylish, made with premium-quality fabric to ensure comfort.",
        category: "womens-dresses",
        price: 39.99,
        discountPercentage: 5.0,
        rating: 4.2,
        stock: 35,
        tags: ["casual wear", "stylish clothing", "womens fashion"],
        brand: "UrbanStyle",
        sku: "MODCSHRT456",
        weight: 4,
        dimensions: {
            width: 18.5,
            height: 29.0,
            depth: 2.5
        },
        warrantyInformation: "No warranty",
        shippingInformation: "Ships in 3 weeks",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 4,
                comment: "Looks great and fits well.",
                date: "2024-11-13T14:20:00.000Z",
                reviewerName: "Sophia Davis",
                reviewerEmail: "sophia.davis@x.dummyjson.com"
            },
            {
                rating: 5,
                comment: "Perfect for casual outings!",
                date: "2024-11-14T18:00:00.000Z",
                reviewerName: "Oliver Martinez",
                reviewerEmail: "oliver.martinez@x.dummyjson.com"
            }
        ],
        returnPolicy: "10 days return policy",
        minimumOrderQuantity: 1,
        meta: {
            createdAt: "2024-11-15T12:00:00.000Z",
            updatedAt: "2024-11-15T12:00:00.000Z",
            barcode: "9876543210987",
            qrCode: "https://example.com/qr-code.png"
        },
        images: [
            "https://nymbo-virtual-try-on.hf.space/file=/tmp/gradio/abd8925a1c375da66d7595c2f3844ee074ac6f36/04743_00.jpg"
        ],
        thumbnail: "https://nymbo-virtual-try-on.hf.space/file=/tmp/gradio/abd8925a1c375da66d7595c2f3844ee074ac6f36/04743_00.jpg"
    },
    {
        id: 202,
        title: "Elegant Floral Dress",
        description: "An elegant floral dress that combines style and comfort, perfect for casual outings or special occasions. Designed with a flattering fit and made from high-quality fabric.",
        category: "womens-dresses",
        price: 59.99,
        discountPercentage: 8.0,
        rating: 4.6,
        stock: 25,
        tags: ["women's fashion", "floral dress", "stylish clothing"],
        brand: "Chic Couture",
        sku: "EFLDRESS789",
        weight: 3,
        dimensions: {
            width: 16.0,
            height: 40.0,
            depth: 2.0
        },
        warrantyInformation: "No warranty",
        shippingInformation: "Ships in 10 days",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 5,
                comment: "Absolutely love this dress!",
                date: "2024-11-14T10:30:00.000Z",
                reviewerName: "Isabella Garcia",
                reviewerEmail: "isabella.garcia@x.dummyjson.com"
            },
            {
                rating: 4,
                comment: "Beautiful design and great fabric.",
                date: "2024-11-14T15:00:00.000Z",
                reviewerName: "Sophia Taylor",
                reviewerEmail: "sophia.taylor@x.dummyjson.com"
            }
        ],
        returnPolicy: "15 days return policy",
        minimumOrderQuantity: 1,
        meta: {
            createdAt: "2024-11-15T14:00:00.000Z",
            updatedAt: "2024-11-15T14:00:00.000Z",
            barcode: "4561237890123",
            qrCode: "https://example.com/qr-code.png"
        },
        images: [
            "https://nymbo-virtual-try-on.hf.space/file=/tmp/gradio/c6a00bd87f53c541a88f163290a869d3fea67bd8/09133_00.jpg"
        ],
        thumbnail: "https://nymbo-virtual-try-on.hf.space/file=/tmp/gradio/c6a00bd87f53c541a88f163290a869d3fea67bd8/09133_00.jpg"
    },
    {
        id: 203,
        title: "Chic Summer Top",
        description: "A stylish and lightweight summer top, designed to keep you cool and fashionable during warm days. Perfect for casual outings or beach vacations.",
        category: "womens-tops",
        price: 34.99,
        discountPercentage: 7.0,
        rating: 4.3,
        stock: 30,
        tags: ["women's fashion", "summer wear", "lightweight clothing"],
        brand: "Summer Glow",
        sku: "CHICTOP321",
        weight: 2,
        dimensions: {
            width: 15.0,
            height: 24.0,
            depth: 1.5
        },
        warrantyInformation: "No warranty",
        shippingInformation: "Ships in 1 week",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 5,
                comment: "Super comfortable and chic!",
                date: "2024-11-14T18:00:00.000Z",
                reviewerName: "Emily Carter",
                reviewerEmail: "emily.carter@x.dummyjson.com"
            },
            {
                rating: 4,
                comment: "Great fit, ideal for summer.",
                date: "2024-11-14T20:30:00.000Z",
                reviewerName: "Mia Jackson",
                reviewerEmail: "mia.jackson@x.dummyjson.com"
            }
        ],
        returnPolicy: "10 days return policy",
        minimumOrderQuantity: 1,
        meta: {
            createdAt: "2024-11-15T15:00:00.000Z",
            updatedAt: "2024-11-15T15:00:00.000Z",
            barcode: "7894561230987",
            qrCode: "https://example.com/qr-code.png"
        },
        images: [
            "https://res.cloudinary.com/chatappjeevanneupane/image/upload/v1731816566/test/ldegoeaze0kjaqowpkem.webp"
        ],
        thumbnail: "https://res.cloudinary.com/chatappjeevanneupane/image/upload/v1731816566/test/ldegoeaze0kjaqowpkem.webp"
    }
];


export default female_data