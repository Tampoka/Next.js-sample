type responseItemType = {
    id: string;
    name: string;
    };

export const fetchNames = async () => {
    const url="https://usemodernfullstack.dev/api/v1/users"
    let data:responseItemType[]|[] = []
    let names:responseItemType[] |[] 
    try {
        const response = await fetch(url);
        data = await response.json() as responseItemType[]
        names=data
    } catch (err) {
      names=[]
      console.error("Error fetching names:", err);
    }
    names=data.map((item) => {return {id:item.id,name:item.name}})
    return names
}