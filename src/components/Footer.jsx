import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-box">
        <h3>Burger Yiyelim</h3>
        <div className="hr"></div>
        <p>
          Burger Yiyelim markasının tek hak sahibi Keban Et’tir. Web sitemizde
          bulunan fiyatlar şubelere, paket servis ve gel-al servise göre
          farklılık gösterebilmektedir. Burger Yiyelim tüm promosyonlar ve
          kampanyaları değiştirme ve sonlandırma hakkını saklı tutar.
        </p>
      </div>
      <div className="footer-box">
        <h3>Kurumsal</h3>
        <div className="hr"></div>
        <ul>
          <li>
            <a href="#">Hakkımızda</a>
          </li>
          <li>
            <a href="#">Aydınlatma Metni</a>
          </li>
          <li>
            <a href="#">Franchising Başvurusu</a>
          </li>
          <li>
            <a href="#">İletişim</a>
          </li>
          <li>
            <a href="#">İnsan Kaynakları</a>
          </li>
          <li>
            <a href="#">Et Aşkı</a>
          </li>
        </ul>
      </div>
      <div className="footer-box">
        <h3>Ürünler</h3>
        <div className="hr"></div>
        <ul>
          <li>
            <a href="#">Menu</a>
          </li>
        </ul>
      </div>
      <div className="footer-box">
        <h3>İlteişim</h3>
        <div className="hr"></div>
        <p>
          <div className="p-icon">
            <LocationOnIcon />
          </div>
          Yenibosna Merkez Mah, Kavak Sk. No:6, 34197 Bahçelievler/İstanbul
          Bahçelievler / İstanbul
        </p>
        <p>
          <div className="p-icon">
            <EmailIcon />
          </div>
          destek@kebanet.com
        </p>
        <div className="icon-top">
          <ul>
            <li>
              <a href="#">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <YouTubeIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="icon">
        <a href="#">
          <FacebookIcon />
        </a>
        <a href="#">
          <FacebookIcon />
        </a>
        <a href="#">
          <FacebookIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;
