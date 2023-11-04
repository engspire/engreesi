import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer p-10 bg-[#021431] text-neutral-content text-base-content place-items-center">
            <div className="footer max-w-[1024px]">
                <div>
                    <Link href="/"><Image alt="Engspire Logo" src="/engspire-logo.ico" width={100} height={100} /></Link>
                    <p>Engspire Language School<br />Improving TESL in 🇱🇰 since 2021</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link href="https://engspire.lk/courses" target="_blank" className="link link-hover">🏫 English Courses</Link>
                    <Link href="https://app.engspire.lk" target="_blank" className="link link-hover">🧿 Engspire Web App</Link>
                    <Link href="/" className="link link-hover">📚 Engreesi Web App</Link>
                    <Link href="https://youtube.com/@engspire" target="_blank" className="link link-hover">📺 YouTube Videos</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link href="https://engspire.lk/payments" target="_blank" className="link link-hover">Payments</Link>
                    <Link href="https://engspire.lk/about-us" target="_blank" className="link link-hover">About Us</Link>
                    <Link href="https://engspire.lk/about-us#contact-us" target="_blank" className="link link-hover">Contact Us</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link href="https://engspire.lk/legal/terms-and-conditions" target="_blank" className="link link-hover">Terms & Conditions</Link>
                    <Link href="https://engspire.lk/legal/privacy-policy" target="_blank" className="link link-hover">Privacy Policy</Link>
                    <Link href="https://engspire.lk/legal/refund-policy" target="_blank" className="link link-hover">Refund Policy</Link>
                    <Link href="https://engspire.lk/legal/cookie-policy" target="_blank" className="link link-hover">Cookie Policy</Link>
                </div>
            </div>
        </footer>
    );
}
