export default function validateInfo(values){
    let errors = {}
    if (!values.fullname.trim()){
        errors.fullname="username required"
    }
    if (!values.birthday.trim()){
        errors.birthday="birthday required"
    }
    if (!values.startday.trim()){
        errors.startday="startday required"
    }
    return errors
}