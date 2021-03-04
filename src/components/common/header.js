import React from "react";
import { Anchor } from "antd";

const { Link } = Anchor;

function AppHeader() {
  return (
    <div className='container-fluid'>
      <div className='header'>
        <div className='logo'>
          <i className='fas fa-fire'></i>
          <a href='http://www.google.com'>Simplistics Design</a>
        </div>

        <Anchor targetOffset='65'>
          <Link href='#hero' title='Home' />
          <Link href='#about' title='About' />
          <Link href='#feature' title='feature' />
          <Link href='#works' title='Works' />
          <Link href='#faq' title='FAQ' />
          <Link href='#pricing' title='Pricing' />
          <Link href='#contact' title='Contact' />
        </Anchor>
      </div>
    </div>
  );
}

export default AppHeader;
