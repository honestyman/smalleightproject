// import { useState, useRef, useEffect } from 'react';
// import { IonIcon } from '@ionic/react';
// import { trash, addCircleOutline } from 'ionicons/icons';

// interface ProfileAvatarProps {
//   defaultAvatar?: string | null; // URL or Data URL of the current avatar
//   onUpload?: (file: File | null) => void; // Callback for when a new avatar is uploaded
// }

// const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ defaultAvatar, onUpload }) => {
//   const [currentAvatar, setCurrentAvatar] = useState<string | undefined | null>(defaultAvatar);

//   useEffect(() => {
//     setCurrentAvatar(defaultAvatar)
//   }, [defaultAvatar]);
  
//   const fileRef = useRef(null);
//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files && event.target.files[0];

//     if (file) {
//       const reader = new FileReader();

//       reader.onloadend = () => {
//         setCurrentAvatar(reader.result as string);
//       };

//       reader.readAsDataURL(file);

//       if (onUpload) {
//         onUpload(file);
//       }
//     }
//   };

//   const deleteFile = () => {
//     setCurrentAvatar('');
//     if(fileRef.current) {
//       (fileRef.current as any).value = '';
//     }
//     if (onUpload) {
//       onUpload(null);
//     }
//   }

//   const backgroundStyle = {
//     backgroundImage: "url('/public/imgs/default-avatar.png')"
//   };

//   return (
//     <div className='w-60 flex flex-wrap justify-end'>
//       <div className="relative w-full h-60 border-dashed border-[1px] border-slate-500 mb-1" style={backgroundStyle}>
//         {currentAvatar && <img src={currentAvatar} alt="Profile Avatar" className="relative w-full h-full z-20 bg-white" />}
//         <label className="absolute z-10 top-0 left-0 w-full h-full cursor-pointer">
//           <input type="file" accept="image/*" ref={fileRef} onChange={handleFileChange} className="hidden" />
//           <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-0 hover:bg-opacity-30">
//             <IonIcon icon={addCircleOutline} size='large' />
//             <p className='text-blue-500 text-sm'>ファイルを選択</p>
//           </div>
//         </label>
//       </div>
//       <button className='w-max text-slate-500 flex align-center' onClick={deleteFile}>
//         <IonIcon icon={trash}></IonIcon>
//         <span className='text-xs'>削除</span>
//       </button>
//     </div>
//   );
// };

// export default ProfileAvatar;
