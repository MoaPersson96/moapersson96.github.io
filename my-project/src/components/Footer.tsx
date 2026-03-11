import React from "react";

// Moa
type FooterProps = React.HTMLAttributes<HTMLElement>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer
      {...props}
      role="contentinfo"
      aria-label="Sidfot"
      className="
        w-full text-sm px-8 py-3 mt-0 
        bg-gray-900 text-white
      "
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Copyright */}
        <p>© 2025 Vårat företag</p>

        {/* Länkar */}
        <nav aria-label="Sidfotslänkar">
          <ul className="flex flex-wrap gap-2">
            <li>
              <a
                href="#"
                className="hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white rounded-sm"
              >
                Integritetspolicy
              </a>
            </li>
            <li>·</li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white rounded-sm"
              >
                Användarvillkor
              </a>
            </li>
            <li>·</li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white rounded-sm"
              >
                Kontakta oss
              </a>
            </li>
          </ul>
        </nav>

        {/* Sociala ikoner */}
        <nav aria-label="Sociala medier">
          <ul className="flex gap-3">
            
            {/* X / Twitter */}
            <li>
              <a
                href="#"
                aria-label="Besök oss på X (Twitter)"
                className="
                  p-2 text-white rounded-full 
                  hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white
                "
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M13.982 10.622L20.54 3h-1.554l-5.693 6.618L8.745 3H3.5l6.876 10.007L3.5 21h1.554l6.012-6.989L15.868 21h5.245l-7.131-10.378Zm-2.128 2.474-.697-.997-5.543-7.93H8l4.474 6.4.697.996 5.815 8.318h-2.387l-4.745-6.787Z"/>
                </svg>
              </a>
            </li>

            {/* LinkedIn */}
            <li>
              <a
                href="#"
                aria-label="Besök oss på LinkedIn"
                className="
                  p-2 text-white rounded-full 
                  hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white
                "
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"/>
                </svg>
              </a>
            </li>

            {/* Instagram */}
            <li>
              <a
                href="#"
                aria-label="Besök oss på Instagram"
                className="
                  p-2 text-white rounded-full 
                  hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white
                "
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"/>
                </svg>
              </a>
            </li>
          </ul>
        </nav>

      </div>
    </footer>
  );
};

export default Footer;