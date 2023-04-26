
export const Productos = () => {

  const [productos, setProductos] = useState([])

  const getPetition = async()=>{
    await URL("https://jsonplaceholder.typicode.com/users")
    
    .then ( res => { 
        setProductos(res.data) 

      })
    .catch( err => { console.log(err) })
  }

  useEffect(() => {
    setTimeout(() => {
      getPetition()
    }, 2000);
  },[])


  return (
    <div>Productos</div>
  )
}
