import productDekstop from "./assets/images/image-product-desktop.jpg";
import productMobile from "./assets/images/image-product-mobile.jpg";
import cart from "./assets/images/icon-cart.svg";

function App() {
  return (
    <main className="bg-cream min-h-screen min-w-screen flex justify-center items-center text-regular font-montserrat text-dark-grayish-blue px-6 py-8">
      <div className="grid sm:grid-cols-2 sm:auto-rows-max rounded-lg overflow-hidden w-fit max-w-sm sm:max-w-xl bg-white">
        <div>
          <picture>
            <source media="(max-width: 640px)" srcSet={productMobile} />
            <img
              src={productDekstop}
              alt="Perfume bottle on top of a table surrounding by leafes"
              className="h-full w-full object-cover"
            />
          </picture>
        </div>
        <div className="p-7">
          <p className="uppercase tracking-[0.25rem] mb-5">Perfume</p>
          <h1 className="font-fraunces text-3xl text-very-dark-blue mb-7">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="mb-5">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex items-center gap-5 mb-5">
            <span className="font-fraunces text-dark-cyan text-3xl">
              $149.99
            </span>
            <span className="line-through">$169.99</span>
          </div>
          <button className="bg-dark-cyan w-full text-white flex p-4 rounded-lg justify-center gap-4">
            <img src={cart} alt="" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
