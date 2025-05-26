import React, {useState, useRef, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Dropdown, DropdownItem, MenuButton, MenuContainer} from "./UserMenuStyles.ts";
import {logout} from "../../api/authApi.ts";

const UserMenu: React.FC = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = async () => {
        await logout();
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        navigate("/login");
        navigate(0);
    };

    return (
        <MenuContainer ref={menuRef}>
            <MenuButton onClick={() => setOpen((prev) => !prev)}>Account ▾</MenuButton>
            {open && (
                <Dropdown>
                    <DropdownItem onClick={() => navigate("/account-info")}>Account Info</DropdownItem>
                    <DropdownItem onClick={() => navigate("/change-password")}>Change Password</DropdownItem>
                    <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
                </Dropdown>
            )}
        </MenuContainer>
    );
};

export default UserMenu;