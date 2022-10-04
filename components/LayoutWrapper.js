import headerNavLinks from "@/data/headerNavLinks";
import Link from "./Link";
import SectionContainer from "./SectionContainer";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="min-w-1/2 flex h-screen flex-col justify-between">
        <header className="flex items-center justify-center py-10">
          <div className="flex items-center text-base leading-7">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="mb-auto text-lg font-medium text-gray-800 hover:text-primary-600 dark:text-gray-100 dark:hover:text-primary-400 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
