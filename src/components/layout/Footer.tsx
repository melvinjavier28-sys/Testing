import Container from '@/components/common/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">National e-Payment</h4>
            <p className="text-sm text-gray-300">Payment solutions built for your business.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/industries/restaurants" className="hover:text-teal">Restaurants</a></li>
              <li><a href="/industries/retail" className="hover:text-teal">Retail</a></li>
              <li><a href="/industries/grocery" className="hover:text-teal">Grocery</a></li>
              <li><a href="/industries/lodging" className="hover:text-teal">Lodging</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/products/pos-terminals" className="hover:text-teal">POS Terminals</a></li>
              <li><a href="/products/atm-machines" className="hover:text-teal">ATM Machines</a></li>
              <li><a href="/products/mobile-payments" className="hover:text-teal">Mobile Payments</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+1234567890" className="hover:text-teal">(123) 456-7890</a></li>
              <li><a href="mailto:support@nationalepayment.com" className="hover:text-teal">support@nationalepayment.com</a></li>
              <li>123 Business Ave, Suite 100</li>
              <li>City, State 12345</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-light pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">© {currentYear} National e-Payment. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-teal">Twitter</a>
            <a href="#" className="text-gray-300 hover:text-teal">LinkedIn</a>
            <a href="#" className="text-gray-300 hover:text-teal">Facebook</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
