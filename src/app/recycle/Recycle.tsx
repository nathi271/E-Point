import React from "react";
import { FiSmartphone, FiHeadphones, FiTv } from "react-icons/fi";
import { GiWashingMachine } from "react-icons/gi";
import { RiFridgeFill } from "react-icons/ri";
import { FaLaptop } from "react-icons/fa";
import { MdOutlineDevicesOther } from "react-icons/md";
import Link from "next/link";


interface RecycleCardProps {
  itemName: string;
  description: string;
  recyclingProcess: string;
  specialInstructions: string;
  icon: React.ReactNode;
}

const Recycle: React.FC = () => {
  const recycleItems: RecycleCardProps[] = [
    {
      itemName: "Smartphone",
      description: "Your old smartphone holds more than memories.",
      recyclingProcess:
        "We carefully dismantle and recycle each component to reduce e-waste and recover precious metals.",
      specialInstructions:
        "Before you recycle: Wipe your data and remove the SIM card.",
      icon: <FiSmartphone size={48} />,
    },
    {
      itemName: "Laptop",
      description: "Your laptop’s journey doesn’t end when you stop using it.",
      recyclingProcess:
        "From circuit boards to screens, we recover and repurpose valuable components responsibly.",
      specialInstructions: "Before you recycle: Remove personal data and detachable batteries.",
      icon: <FaLaptop size={48} />,
    },
    {
      itemName: "Accessories",
      description: "Recycle various electronic accessories responsibly.",
      recyclingProcess:
        "We separate and recycle different materials for each accessory.",
      specialInstructions: "Bundle cables together before dropping off.",
      icon: <FiHeadphones size={48} />,
    },
    {
      itemName: "Television",
      description: "Old TVs may be outdated, but their materials are still valuable!",
      recyclingProcess:
        "We safely extract electronic parts, plastics, and glass to minimize waste.",
      specialInstructions:
        "Before you recycle: Bring remote controls and cables for complete recycling.",
      icon: <FiTv size={48} />,
    },
    {
      itemName: "Refrigerator",
      description: "Your fridge kept things fresh—now let’s give it a fresh start!.",
      recyclingProcess:
        "We handle refrigerant gases, metals, and insulation safely, ensuring eco-friendly disposal.",
      specialInstructions:
        "Before you recycle: Empty, clean, and defrost your fridge.",
      icon: <RiFridgeFill size={48} />,
    },
    {
      itemName: "Other",
      description: "Responsible recycling of any other Electronic Devices.",
      recyclingProcess:
        "Proper dismantling and recycling of metal and electronic components.",
      specialInstructions: "Ensure it's not working before recycling.",
      icon: <MdOutlineDevicesOther size={48} />,
    },
  ];

  return (
    <div className="section container">
      <h2 className="text-4xl text-emerald-700 text-center md:text-left font-bold mb-4">
        Recycle Center
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1">
        {recycleItems.map((item, index) => (
          <RecycleCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const RecycleCard: React.FC<RecycleCardProps> = ({
  itemName,
  description,
  recyclingProcess,
  specialInstructions,
  icon,
}) => {
  return (
    <div className="p-4 m-4 bg-white shadow-lg rounded-md" style={{display: "flex",
          justifyContent: "space-between",
          alignItems: "center" }}>

      <div className="flex justify-center items-center mb-2">{icon}</div>

      <div>
      <h3 className="text-xl font-semibold mb-2">{itemName}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-gray-600">{recyclingProcess}</p>
      <p className="text-gray-600">{specialInstructions}</p>
      </div>

      <div>
      <Link 
        href={`/recycle/${itemName.toLowerCase()}`}
        className="btn-md btn-primary mt-2"  id="recyle-btn"
      >
        Recycle Now
      </Link>
      </div>
    </div>
  );
};

export default Recycle;
