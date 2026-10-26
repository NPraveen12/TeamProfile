// Write your code here
import './index.css'
const TeamMemberCard = obj => {
  const {imageUrl, name, role, department} = obj
  return (
    <div className="member-card">
      <img src={imageUrl} alt={name} className="member-img" />
      <h1 className="member-name">{name}</h1>
      <p className="member-role">{role}</p>
      <p className="member-department">Department: {department}</p>
    </div>
  )
}
export default TeamMemberCard
