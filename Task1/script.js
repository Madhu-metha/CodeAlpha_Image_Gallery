// Descriptions for each image
const descriptions = [
    "Delicate and colorful macarons with a rich, flavorful filling",
    "A classic ice cream sundae topped with chocolate syrup and sprinkles",
    "A decadent and fudgy brownie, perfect for any chocolate craving",
    "A creamy strawberry cheesecake with a buttery graham cracker crust",
    "A delicious and moist chocolate cake, perfect for any chocolate lover",
    "Freshly baked chocolate chip cookies, warm and chewy",
    "A vibrant fruit tart with a crisp crust and a variety of fresh fruits",
    "A warm and gooey Fruit Parfait topped with sweet icing",
    "A cute and fluffy cupcake with creamy frosting",
    "A rich and smooth chocolate mousse, light and fluffy",
    "A smooth, creamy cheesecake with a buttery crust, topped with a luscious strawberry glaze, whipped cream, and garnished with fresh strawberry, mint leaves, and a sprinkle of powdered sugar",
    "A beautiful Creme Brulee with a crisp meringue shell and a soft, marshmallow-like center",
    "Assorted Mini Layer Cakes with Creamy Drip Glaze, topped with cherries and mint for a colorful, elegant treat",
    "Decadent chocolate lava cake topped with vanilla ice cream, drizzled with caramel, and garnished with fresh raspberries, mint, and chocolate shards",
    "A warm, rich strawberry lava cake with a molten strawberry center that flows with sweet berry goodness in every bite",
    "A vibrant, layered cake bursting with colorful confetti sprinkles and topped with whipped cream and a cherry, perfect for a playful celebration",
    "A light and airy chiffon cake with a delicate, fluffy texture and a hint of sweetness, perfect for any occasion",
    "A vibrant, multi-layered treat with swirls of colorful frosting and fruity garnishes, perfect for a joyful burst of sweetness",
    "A dark larva cake is a rich, moist dessert made with dark chocolate, often adorned with a unique, insect-inspired design or flavor",
    "A dreamy layered mousse dessert with blueberry and strawberry tones, topped with a glossy berry drizzle and a touch of mint",
    "Opera cake is a layered French dessert with almond sponge, coffee buttercream, chocolate ganache, and glaze",
    "A strawberry dome is a delicate dessert featuring a smooth, spherical layer of strawberry-flavored mousse or jelly, often filled with fresh strawberries",
    "Brownie cake is a dense, fudgy dessert combining the rich texture of brownies with the softness of cake",
    "Victoria sponge cake is a light cake filled with jam and cream",
    "Jelly drizzle cake is a moist cake topped with a tangy fruit jelly glaze",
    "Red velvet cake is a rich, moist cake with a distinct red color, layered with cream cheese or buttercream frosting",
    "Funfetti cake is a colorful, fluffy cake speckled with sprinkles throughout, often topped with frosting",
    "Molten lava cake is a rich, individual chocolate cake with a gooey, molten center that flows out when cut",
    "Chocolate fudge is a smooth, creamy, and dense candy made from chocolate, sugar, butter, and condensed milk, often cut into small squares",
    "Tiramisu is an Italian dessert made of layers of coffee-soaked ladyfingers, mascarpone cream, and cocoa powder"
];

// Function to show the modal with the image and description
function showDescription(index) {
    const modal = document.getElementById('descriptionModal');
    const modalImage = document.getElementById('modalImage');
    const descriptionText = document.getElementById('descriptionText');
    const hoverCaption = document.getElementById('hoverCaption');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Set image source and description
    modalImage.src = galleryItems[index].querySelector('img').src;
    descriptionText.textContent = descriptions[index];
    hoverCaption.textContent = galleryItems[index].querySelector('.overlay').textContent;

    // Show modal
    modal.style.display = 'flex';
}

// Function to close the modal
function closeDescription() {
    const modal = document.getElementById('descriptionModal');
    modal.style.display = 'none';
}

// Hide loader once page loads (only once)
window.onload = function() {
    document.getElementById('loader').style.display = 'none';
};

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById('descriptionModal');
    if (event.target === modal) {
        closeDescription();
    }
};