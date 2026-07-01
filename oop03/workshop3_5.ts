enum Role{
    admin,
    Editor,
    Viewer
}
interface User {
    username: string;
    Email: string;
    role: Role
}
function checkAccess(user: User) {
    if(user.role === Role.admin)
        console.log(`ผู้ใช้ ${user.username} มีสิทธิ์เข้าถึงระบบทั้งหมด`);
    else if(user.role === Role.Editor)
        console.log(`ผู้ใช้ ${user.username} มีสิทธิ์แก้ไขข้อมูล`);
    else
        console.log(`ผู้ใช้ ${user.username} มีสิทธิ์เข้าถึงข้อมูลเท่านั้น`);
}
const user1: User = {username: "Mama", Email: "thtt@example.com", role: Role.admin};
checkAccess(user1);