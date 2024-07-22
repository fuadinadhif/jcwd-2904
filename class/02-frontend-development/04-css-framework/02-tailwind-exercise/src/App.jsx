import productDekstop from "./assets/images/image-product-desktop.jpg";
import cart from "./assets/images/icon-cart.svg";

function App() {
  return (
    <main className="bg-cream h-screen w-screen flex justify-center items-center text-regular font-montserrat text-dark-grayish-blue">
      <div className="grid grid-cols-2 grid-rows-[400px] rounded-lg overflow-hidden w-fit max-w-xl bg-white">
        <div>
          <img
            src={productDekstop}
            alt="Perfume bottle on top of a table surrounding by leafes"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-7">
          <p className="uppercase tracking-[0.25rem]">Perfume</p>
          <h1 className="font-fraunces text-3xl text-very-dark-blue">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div>
            <span>$149.99</span>
            <span>$169.99</span>
          </div>
          <button>
            <img src={cart} alt="" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
