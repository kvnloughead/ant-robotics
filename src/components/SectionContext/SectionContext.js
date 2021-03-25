import './SectionContext.css';

export default function SectionContext() {
    return(
        <div className='section-context'>
            <p className='section-context__subheading'>Few words about robots. Lorem ipsum, abra-kadabra, bla-bla-bla, information about robots here.</p>
            <ul className='section-context__list'>
                <li className='section-context__list-item'>
                    <image className='section-context__list-img' alt='checkmark' />
                    Some facts here and below
                </li>
                <li className='section-context__list-item'>
                    <image className='section-context__list-img' alt='checkmark' />
                    Flexible
                </li>
                <li className='section-context__list-item'>
                    <image className='section-context__list-img' alt='checkmark' />
                    Customizable
                </li>
            </ul>
        </div>
    )
}