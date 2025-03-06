export default function Feature({title, description}: {title: string, description: string}) {
    return(
        <div className="w-md h-[448px] p-5">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}