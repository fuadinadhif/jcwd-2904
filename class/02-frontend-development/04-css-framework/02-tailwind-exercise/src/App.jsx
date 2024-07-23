import productDekstop from "./assets/images/image-product-desktop.jpg";
import productMobile from "./assets/images/image-product-mobile.jpg";
import cart from "./assets/images/icon-cart.svg";

function App() {
  return (
    <main className="min-w-screen flex min-h-screen items-center justify-center bg-cream px-6 py-8 font-montserrat text-regular text-dark-grayish-blue">
      <div className="grid w-fit max-w-sm overflow-hidden rounded-xl bg-white sm:max-w-xl sm:auto-rows-max sm:grid-cols-2">
        <div>
          <picture>
            <source media="(max-width: 640px)" srcSet={productMobile} />
            <img
              src={productDekstop}
              alt="Perfume bottle on top of a table surrounding with leafes"
              className="h-full w-full"
            />
          </picture>
        </div>
        <div className="p-7">
          <p className="mb-5 uppercase tracking-[0.5em]">Perfume</p>
          <h1 className="mb-7 font-fraunces text-4xl font-bold text-very-dark-blue">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="mb-5">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="mb-5 flex items-center gap-5">
            <span className="font-fraunces text-3xl font-bold text-dark-cyan">
              $149.99
            </span>
            <span className="line-through">$169.99</span>
          </div>
          <button className="flex w-full justify-center gap-4 rounded-lg bg-dark-cyan p-4 text-white">
            <img src={cart} alt="Cart icon" />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
