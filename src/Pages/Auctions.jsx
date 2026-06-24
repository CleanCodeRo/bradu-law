export default function Auctions() {

    return (
        <div id="principalHolder" className="w-full flex items-center justify-center text-gray-700 font-['intel']">
            <div id="centerdHolder" className="w-11/12 md:w-5/6 xl:w-3/5 ">
                <p className="text-gray_text text-xl mt-12 mb-4">CATEGORII: LICITATII</p>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    style={{
                        margin: 'auto',
                        background: 'rgba(241, 242, 243, 0)',
                        display: 'block',
                        shapeRendering: 'auto'
                    }}
                    width="400px"
                    height="400px"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid"

                >
                    <path d="M10 50A40 40 0 0 0 90 50A40 41.7 0 0 1 10 50" fill="#b1b1b1" stroke="none">
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            dur="2.0408163265306123s"
                            repeatCount="indefinite"
                            keyTimes="0;1"
                            values="0 50 50.85;360 50 50.85"
                        ></animateTransform>
                    </path>
                </svg>
                <p className="text-gray_text text-xl mt-12 mb-4 text-center">Licitatiile sunt in curs de
                    actualizare.</p>
            </div>
        </div>
    );
}
