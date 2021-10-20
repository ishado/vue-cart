var app = new Vue({
  el: "#app",
  data: {
    product: "iPhone",
    company: "Apple",
    selectedColor: 0,
    // image: "./images/iphone-11-silver.png",
    
    colors: [
      {
        id: 1,
        name: "Gray",
        image: "./images/iphone-11-gray.png",
        numberOfProducts: 15,
      },
      {
        id: 2,
        name: "Gold",
        image: "./images/iphone-11-gold.png",
        numberOfProducts: 8,
      },
      {
        id: 3,
        name: "Green",
        image: "./images/iphone-11-green.png",
        numberOfProducts: 20,
      },
      {
        id: 4,
        name: "Silver",
        image: "./images/iphone-11-silver.png",
        numberOfProducts: 5,
      },
    ],
    cartItems: 0,
  },
  methods: {
    addToCart() {
      this.cartItems++;
    },
    updateImage(i) {
      // this.image = image;
      this.selectedColor = i;
    },
  },
  computed: {
    productName(){
      return `${this.company} ${this.product}`;
    },
    image(){
      return this.colors[this.selectedColor].image ;
    },
    numberOfProducts(){
      return this.colors[this.selectedColor].numberOfProducts ;
    },
  },
})
