const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-[424px] text-center my-8 mx-auto">
           <p className="text-[#D99904] mb-2">---{subHeading}---</p> 
           <h3 className=" py-4 border-y-4 text-3xl uppercase">{heading}</h3>
        </div>
    );
};

export default SectionTitle;