import { atom } from 'recoil'

export const counterToken=atom({
    key:'counterToken',
    default: localStorage.getItem('token') || null, // Initialize with the token from localStorage if available
    effects: [
      ({ onSet }) => {
        onSet((newToken) => {
          if (newToken) {
            localStorage.setItem('token', newToken); // Save to localStorage if a token exists
          } else {
            localStorage.removeItem('token'); // Remove token from localStorage if it’s cleared
          }
        });
      },
    ],
})

export const roleforall=atom({
  key:"roleforall",
  default:null || localStorage.getItem('role'),
  effects: [
    ({ onSet }) => {
      onSet((newRole) => {
        if (newRole) {
          localStorage.setItem('role', newRole); // Save to localStorage if a token exists
        } else {
          localStorage.removeItem('role'); // Remove token from localStorage if it’s cleared
        }
      });
    },
  ],
})

export const statusoftheissue=atom({
  key:'statusoftheissue',
  default:false
})

export const firstname=atom({
  key:'firstname2',
  default:null || localStorage.getItem('firstname'),
  effects: [
    ({ onSet }) => {
      onSet((newRole) => {
        if (newRole) {
          localStorage.setItem('firstname', newRole); // Save to localStorage if a token exists
        } else {
          localStorage.removeItem('firstname'); // Remove token from localStorage if it’s cleared
        }
      });
    },
  ],
})