import React, { useState } from 'react';

const ToggleSwitch: React.FC = () => {
    const [isToggled, setIsToggled] = useState<boolean>(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div
            onClick={handleToggle}
            className={`flex items-center cursor-pointer w-10 h-6 rounded-full p-1 transition-all duration-300 ${
                isToggled ? 'bg-[#FFE878]' : 'bg-[#181818]'
            }`}
        >
            <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                    isToggled ? 'translate-x-4' : 'translate-x-0'
                }`}
            />
        </div>
    );
};

export default ToggleSwitch;
