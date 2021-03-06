import { getUserInfo } from '../localStorage';

export const Header = {
  render: () => {
    const { name } = getUserInfo();
    return `
        <div class="brand">
          <a href="/#/">amazona</a>
        </div>
    
        <div>
        ${
          name
            ? `<a href="/#/profile">${name}</a>`
            : ` <a href="/#/signin">Sign-In</a>`
        }
          <a href="/#/cart">Cart</a>
        </div>
      `;
  },
  after_render: () => {},
};
