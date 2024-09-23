

const SignUp = () => {
  return (
    <div className="bg-inherit">
 <form>
  <label htmlFor="name" >Name
  <input type="text" placeholder="Username" />
  </label>
  <input type="email" placeholder="Email" />
  <input type="password" placeholder="Password" />
  <button type="submit">Sign Up</button>
 </form>
    </div>
  )
}

export default SignUp
