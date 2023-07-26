import Document, { Head, Html, Main, NextScript } from "next/document";
import Link from "next/link";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
    <div id="fb-root"></div>

    <div id="fb-customer-chat" className="fb-customerchat">
    </div>

    <Script  strategy="lazyOnload" >
      {`
         var chatbox = document.getElementById('fb-customer-chat');
         chatbox.setAttribute("page_id", "111364846894053");
         chatbox.setAttribute("attribution", "biz_inbox");
      
         window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v17.0'
          });
        };
  
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      `}
    </Script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
