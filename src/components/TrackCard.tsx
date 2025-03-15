import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface TrackCardProps {
  title: string;
  subtitle: string;
  level: string;
  features: string[];
  additionalBenefits: string[];
  icon: LucideIcon;
  backgroundImage: string;
  isSelected?: boolean;
  image:string,
  price:string,
  onClick?: () => void;
}

const TrackCard: React.FC<TrackCardProps> = ({
  title,
  subtitle,
  level,
  features,
  additionalBenefits,
  icon: Icon,
  backgroundImage,
  isSelected,
  image,
  price,
  onClick
}) => {
  return (
    <div 
    style={{boxShadow:"0 0 10px 5px rgba(0, 0, 0, 0.5)"}}
      className={`relative group cursor-pointer transform transition-all duration-500 shadow-2xl rounded-xl ${
        isSelected ? 'scale-[1.02]' : 'hover:scale-[1.01]'
      }`}
      onClick={onClick}
    >
      {/* Background Image with Overlay */}
      <div 
        className={`absolute  rounded-2xl transition-all duration-500 overflow-hidden ${
          isSelected 
            ? 'bg-white' 
            : 'bg-white'
        }`}
      >
        <div 
          className="absolute  transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: `white`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-white" />
      </div>
      
      {/* Content Container */}
      <div className={`relative rounded-2xl p-8 h-full ${
        isSelected 
          ? 'bg-white/10 border-violet-400/50 shadow-lg shadow-violet-500/20' 
          : 'bg-white/5 border-white/10 hover:border-violet-400/30'
      }`}>
        <img 
                  src={image} 
                  alt={title}
                  className="w-full  object-cover"
                />
        {/* Header */}
        <div className="flex items-center mb-5 mt-10">
          
        
          <div className={`p-3 rounded-xl  ${
            isSelected ? '' : 'bg-white/5'
          }`}>
            
            <Icon className={`w-8 h-8 transition-colors duration-500 ${
              isSelected ? 'text-black' : 'text-black group-hover:text-black'
            }`} />
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-bold text-black">{title}</h3>
            <p className="text-black">{subtitle}</p>
            
          </div>
          
        </div>
        
        
        {/* Level Badge */}
        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-500 ${
          isSelected 
            ? 'bg-indigo-800 text-white shadow-lg shadow-violet-500/20' 
            : 'bg-indigo-800 text-white group-hover:indigo-800'
        } mb-8`}>
          {level}
        </span>

        {/* Features and Benefits */}
        <div className="space-y-6">
          <div className="transform transition-all duration-500">
            {price?<h3 className="text-3xl font-bold text-black mb-5">{price}</h3>:""}
          
            <h4 className="text-lg font-semibold text-black mb-3">Core Features</h4>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li 
                  key={index} 
                  className={`flex items-center text-black transition-all duration-300 ${
                    isSelected ? 'translate-x-2' : 'group-hover:translate-x-1'
                  }`}
                >
                  <span className=" mr-2 animate-pulse" style={{color:"green"}}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="transform transition-all duration-500">
            <h4 className="text-lg font-semibold text-black mb-3">Additional Benefits</h4>
            <ul className="space-y-3">
              {additionalBenefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className={`flex items-start text-black transition-all duration-300 ${
                    isSelected ? 'translate-x-2' : 'group-hover:translate-x-1'
                  }`}
                >
                  <span className="text-violet-400 mr-2">◆</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Button */}
        {price?"":
        <button 
        className={`mt-8 w-full py-3 px-6 rounded-lg font-medium transition-all duration-500 ${
          isSelected 
            ? 'bg-indigo-700 text-white shadow-lg shadow-indigo-700/20 transform scale-105' 
            : 'bg-indigo-800 text-violet-200 hover:bg-indigo-700 hover:text-white hover:shadow-lg hover:shadow-indigo-700/20'
        }`}
      >
        Explore Track
      </button>
        }
        
      </div>
    </div>
  );
};

export default TrackCard;