{[key]: value}

key can anyhting like

"category"

"name"

"sort_by"


const [sort, setSort] = useState({
  by: "default",
  order: "asc"
})

For following you have to use vite-plugin-svgr


import {ReactComponent as Sun} from "./Sun.svg"

<Sun/>


useTheme = function(themse) {
  return {
    setTheme
  }
}

const [theme, setTheme] = useTheme("dark")

useParams - to get the param in URL. Example /products/:id, you will get the id parameter
useSearchParams - to set and get query params

NavLink component will automatically add active class

Nested routing
Route
  route

<Outlet> in the parent route

const navigate = useNavigate()

const handleBack = () => {
  navigate(-1)
}

react strict mode will render the component twice in development env


useEffect(() => {
  return () => {
    console.log("this function will be called when comp is unmount")
  }
}) // Subscribe/Unsubcribe

Mount - rerender - Unmount

{isLoading && <Loader/>}

----------------

import axios from "axios"

export default axios.create({
  baseURL: "..."
})