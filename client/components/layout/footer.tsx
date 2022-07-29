import Link from 'next/link';
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-secondary z-10 text-center lg:text-left text-light pt-80 pb-15">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 gap-20">
          <div className="mb-40 lg:mb-0">
            <Link href="/pages"><a><Image src="/assets/images/logo.png" height={80} width={110} alt="Mobile Eco Logo"/></a></Link>
            <div className="flex flex-col font-medium mt-30 lg:mt-65">
              <p className="text-white">Mobile Eco System</p>
              <a href="mailto:jieli@me.com" className="text-warning">jieli@me.com</a>
              <a href="tel:13862691692" className="text-warning">Call 1 386 269 1692</a>
            </div>
          </div>
          <div className="lg:col-span-2 text-white">
            <div className="grid lg:grid-cols-4 mt-5">
              <div>
                <p className="text-18 font-medium text-white mb-20 mt-30 lg:mt-0">About</p>
                <ul className="flex flex-col">
                  <li className="py-10"><Link href="/pages"><a>Home</a></Link></li>
                  <li className="py-10"><Link href="/shop-plans"><a>Shop Plans</a></Link></li>
                  <li className="py-10"><Link href="/business"><a>Business</a></Link></li>
                </ul>
              </div>
              <div>
                <p className="text-18 font-medium text-white mb-20 mt-30 lg:mt-0">Blogs</p>
                <ul className="flex flex-col">
                  <li className="py-10"><Link href="/blog"><a>Our Blogs</a></Link></li>
                  <li className="py-10"><Link href="/faqs"><a>FAQs</a></Link></li>
                  <li className="py-10"><Link href="/about-us"><a>About us</a></Link></li>
                  <li className="py-10"><Link href="/contact-us"><a>Contact us</a></Link></li>
                </ul>
              </div>
              <div>
                <p className="text-18 font-medium text-white mb-20 mt-30 lg:mt-0">Careers</p>
                <ul className="flex flex-col">
                  <li className="py-10"><Link href="/faqs"><a>Terms of Service & Privacy</a></Link></li>
                </ul>
              </div>
              <div>
                <p className="text-18 font-medium text-white mb-20 mt-30 lg:mt-0">Follow us</p>
                <div className="d-flex justify-center lg:justify-start">
                  <Link href="https://www.facebook.com/me" passHref><a className="mr-35">Facebook</a></Link>
                  <Link href="https://www.instagram.com/me" passHref><a className="mr-35">Twitter</a></Link>
                  <Link href="https://www.pinterest.com/me" passHref><a>Telegram</a></Link>
                </div>
                <p className="font-medium mb-15 mt-25">We accept</p>
                <div className="d-flex justify-center lg:justify-start">
                  <span className="mr-10">CA</span>
                  <span className="mr-10">NV</span>
                  <span>AZ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex justify-between mt-20 leading-10">
          <p>© 2022 Mobile Eco. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}