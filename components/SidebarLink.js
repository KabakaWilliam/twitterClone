const SidebarLink = ({Icon, text, active}) => {
    // logic for active. If active is true, font will be bolded. active is
    // true by default, but you can also specigy active={true}
    return (
        <div className={`text-[#d9d9d9] flex items-center justify-center 
        xl:justify-start text-xl space-x-3 hoverAnimation ${active && "font-bold"}`}>
            <Icon className ="h-7"/>
            <span className = "hidden xl:inline">{text}</span>
        </div>
    );
}

export default SidebarLink
