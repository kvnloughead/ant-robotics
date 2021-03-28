import './SectionContext.css';

export default function SectionContext() {
    return (
        <div className="section-context">
            <p className="section-context__subheading">Few words about robots. Lorem ipsum, abra-kadabra, bla-bla-bla, information about robots here.</p>
            <ul className="section-context__list">
                <li className="section-context__list-item">
                    <img className="section-context__list-img" alt="checkmark"  src="../../images/products/product_context-checkmark.svg" />
                    <span className="section-context__list-text">Some facts here and below</span>
                </li>
                <li className="section-context__list-item">
                    <img className="section-context__list-img" alt="checkmark" src="../../images/products/product_context-checkmark.svg" />
                    <span className="section-context__list-text">Flexible</span>
                </li>
                <li className="section-context__list-item">
                    <img className="section-context__list-img" alt="checkmark" src="../../images/products/product_context-checkmark.svg" />
                    <span className="section-context__list-text">Customizable</span>
                </li>
            </ul>
        </div>
    );
}
