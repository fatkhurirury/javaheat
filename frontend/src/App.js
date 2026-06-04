import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import Contact from "@/pages/Contact";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <SmoothScrollProvider>
                    <Navigation />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </main>
                    <Footer />
                    <WhatsAppFab />
                    <Toaster
                        position="bottom-center"
                        toastOptions={{
                            style: {
                                background: "#0A0A0A",
                                color: "#FDFDFD",
                                border: "1px solid #2A2A2A",
                                borderRadius: 0,
                                fontFamily:
                                    "Outfit, system-ui, sans-serif",
                                fontSize: "13px",
                                letterSpacing: "0.05em",
                            },
                        }}
                    />
                </SmoothScrollProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
