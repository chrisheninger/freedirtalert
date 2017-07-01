import React from 'react';
import { connect } from 'react-fela';

function Logo({ styles }) {
  return (
    <div className={styles.logo}>
      <svg
        className={styles.emoji}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        aria-label="free"
      >
        <path
          fill="#006DAE"
          d="M62 50c0 6.6-5.4 12-12 12H14C7.4 62 2 56.6 2 50V14C2 7.399 7.4 2 14 2h36c6.6 0 12 5.399 12 12v36z"
        />
        <path
          fill="#014D87"
          d="M56.838 4.162A11.896 11.896 0 0 1 59 11v37c0 6.6-4.398 11-11 11H11c-2.537 0-4.895-.805-6.838-2.162C6.336 59.949 9.938 62 14 62h36c6.602 0 12-5.4 12-12V14c0-4.062-2.049-7.664-5.162-9.838z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#0FB4D4"
          d="M4.975 12.585c.338 2.703 4.793-2.587 9.303-7.136 2.91-2.925-10.321-.999-9.303 7.136z"
        />
        <path
          fill="#FFF"
          d="M11.2 30.452h6.249v3.097H11.2v7.343H7.977V23.108h9.473v3.12H11.2v4.224zm12.375 3.985v6.455h-3.249V23.108h5.523c3.099 0 5.599 2.4 5.599 5.352v.672c0 2.064-1.25 3.864-3.074 4.729l3.199 7.031h-3.725l-2.949-6.455h-1.324zm0-3.097h2.274c1.274-.023 2.35-1.031 2.35-2.208v-.672c-.025-1.248-1.075-2.231-2.35-2.231h-2.274v5.111zm13.85-.888h6.249v3.097h-6.249v4.224h6.249v3.119h-9.473V23.108h9.473v3.12h-6.249v4.224zm12.349 0h6.249v3.097h-6.249v4.224h6.249v3.119H46.55V23.108h9.473v3.12h-6.249v4.224z"
        />
      </svg>
      <svg
        className={styles.emoji}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        aria-label="dirt"
      >
        <path
          fill="#0FB4D4"
          d="M62 32c0 16.569-13.432 30-30 30S2 48.568 2 32C2 17.601 12.144 5.572 25.674 2.667l.847.014.61-.287c.49-.08.984-.148 1.482-.205l1.05.033.731-.18c.142-.008.283-.014.426-.02l1.18.163.781-.176c.149.004.298.01.446.016l1.646.414 1.942-.055c.23.037.46.078.688.119l7.117 4.535 7.763 2.951C58.298 15.468 62 23.302 62 32z"
        />
        <path
          fill="#A6E639"
          d="M33.455 11.468c1.955.625 1.877-.609 3.111.83.707.824 1.99 2.334 3.514 2.705.211.053.688-.402.688-.768 0-.363-1.051-1.131-1.656-1.295-.607-.164.242-1.289-.566-1.635-.809-.344-1.697-1.635-2.02-2.645-.324-1.01-1.738-.162-2.223-.363-.484-.203-1.09-.082-1.615.686s.266 2.325.767 2.485z"
        />
        <path
          fill="#A6E639"
          d="M44.039 39.73c-.021-.424-3.866-2.527-4.334-2.555-.769-.045-1.816-.432-2.519-.02a2.137 2.137 0 0 0-.741.695c-.132.25-.882-.217-1.172-.061-.695.369-1.087-.832-.889-1.293.481-1.125-1.229-.412-1.406-.721.209.363-.058-3.208-.658-1.191-.454 1.525-2.23-.225-2.017-1.332.332-1.715 2.914-1.963 3.483-1.661.287.152 1.337 1.676 1.471 1.633.289-.092-.17-1.793-.227-2.022-.207-.828 1.387-1.107 1.5-1.975.096-.738.595-.482 1.092-.875.722-.572.158-1.637 1.082-2.182.314-.188 1.491-.324 1.646-.652.142-.301-.993-1.125-.017-1.363.876-.213 1.771.166 2.008-1.098.216-1.146-1.051-1.412-1.436-2.303-.116-.268-.262-1.807-.804-1.521-.67.352-1.087 1.203-1.634.191-.986-1.82-3.434-2.605-2.288.258.591 1.48-1.62 5.979-1.939 1.818-.111-1.443-4.434-1.879-2.982-3.479 1.475-1.625 3.484-1.68 4.03-4.174.758-3.457-1.636-.516-2.86-1.184-1.826-.998-.279-.459-1.223.836-.358.492-1.534-.313-2.054-.234-.484.072-1.729 1.145-2.062.477-.613-1.221-4.897-1.977-6.06-1.541-2.416.906-3.255-.32-5.671-.797-.838-.166-4.952-.283-4.684 1.141.105.559.499.998.673 1.529.257.783-.921.18-1.192.371-.072.051 1.388 1.078 1.507 1.201.395.402-1.515.893-1.703 1.566-.384 1.371 2.617.979 2.069 2.621-.168.502-1.887 1.318-2.051 2.998-.031.322 2.134-2.082 3.535-1.574 1.237.449 1.129-2.908 2.666-2.908 2.861 0 3.415 2.789 4.924 4.658.704.871 1.269 1.234 1.396 2.373.117 1.059-.111 2.35.273 3.357.368.963 1.115 1.031 1.609 1.809.585.918.917 1.807 1.713 2.602 1.156 1.156 3.122 2.93 4.935 2.658.359-.053 1.708.715 2.014.945.473.355.713.898 1.057 1.357.319.428 1.332.158 1.777.363.396.184-1.028 3.184-.498 3.973.583.869.583 1.842 1.457 2.527.827.648 1.076.699 1.178 1.824.164 1.828-.367 3.674-.809 5.377-.227.875.23 1.84-.109 2.676-.426 1.043-.714 1.939-.342 3.096.646 2.014 4.271 2.344 2.119.586-.915-.748.988-2.551.396-2.727-1.019-.424.188-.809.322-1.252.268-.881 4.313-4.529 4.612-5.133.251-.506.089-1.029.5-1.469.457-.486 1.085-.314 1.599-.658 1.068-.715.683-1.926 1.124-2.914.875-1.961 1.245-1.182.046-2.715-.442-.558-3.348-.351-3.432-1.932z"
        />
        <path
          fill="#A6E639"
          d="M22.271 8.013c.99 1.033 1.97-.543 2.133 0s.189 1.57 1.371 1.654c1.183.084-1.101.844-.339 1.17.76.326 2.391 1.359 2.986.924.6-.436 1.306-.76 1.576-.436.273.328 1.902-.053 1.439-.596-.459-.545-1.71-1.834-1.657-2.574.056-.742 1.468-2.643-.107-2.48-1.027.107-1.251 1.033-1.251 1.576s-1.465-.814-1.738-.787c-.271.028-1.303-1.656-1.684-1.656s-2.934-.816-2.716 0c.218.815-1.004 2.172-.013 3.205zm10.766-4.537c-.484.217.701.621-.107.836s-.836.889-1.535.322c-.701-.564-1.463.189-.934.539s1.418 1.186 1.391 1.643c-.025.459.836.676 1.645.621.807-.055 1.777.188 1.803-.162.027-.35.123-.494.027-.754-.141-.383-.484-.754-1.318-.432-.836.324-1.377.162-1.496-.242-.121-.404 1.631-1.186 2.41-.646.781.539 1.51-.297.943-.674s-.189-.781.201-.834c.283-.039.539-.752.748-1.309a30.087 30.087 0 0 0-3.588-.359c.005.762.291 1.238-.19 1.451zm-7.164-.672c.541.229 1.422-.004 1.256-.41-.488.08-.973.17-1.453.273.045.053.109.1.197.137z"
        />
        <path
          fill="#A6E639"
          d="M30.82 2.023c.568.104.938.547 1.031.871.102.34.918-.398.93-.885a33.765 33.765 0 0 0-1.961.014zm-1.588 1.119c-.342.469-.047 1.039.357.566.404-.475.08-1.658.404-1.146.322.512.916 1.324 1.32 1.361.402.039.053-.473 0-.904-.045-.359-1.008-.834-.922-.977-.598.031-1.191.08-1.779.146.425.276.867.618.62.954zm5.334 30.831c.666-.08 1.051.727 1.818.688.768-.041 1.879 1.094 2.523.424.525-.545-2.303-.99-3.23-1.475-.929-.485-1.779.443-1.111.363zm3.293-30.362c.928.445.768.43.201.861s-.363 1.375.889 1.309c1.252-.068 2.02-1.307 2.586.443.564 1.75.162 3.668.889 4.203.727.537.121.904 0 1.408-.121.502.201.865.768.705.566-.162.404.889 0 1.332-.404.445-.885 1.293.365 2.828s1.412 1.334 1.816 1.859.727-.195.848-.805-.283-2.742 1.131-2.746c1.414-.006 1.818-1.137 1.98-1.5s1.293-.322 1.898-.848c.537-.465 1.137-.859 1.154-2.672a29.914 29.914 0 0 0-14.879-7.486c-.11.421-.105.89.354 1.109z"
        />
        <path
          opacity=".2"
          fill="#302C3B"
          d="M16.787 48.213C5.353 36.779 5.084 18.416 15.969 6.648 7.576 11.966 2 21.33 2 32c0 16.569 13.432 30 30 30 8.711 0 16.552-3.717 22.033-9.646-11.597 7.349-27.133 5.974-37.246-4.141z"
        />
      </svg>
      <svg
        className={styles.emoji}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        aria-label="alert"
      >
        <path
          fill="#302C3B"
          d="M9 53.305v4.347C9 60.053 19.297 62 32 62s23-1.947 23-4.347v-4.347l-46-.001z"
        />
        <path
          fill="#4E5E67"
          d="M12.353 53.305v4.347C12.353 60.053 21.148 62 32 62c10.853 0 19.647-1.947 19.647-4.347v-4.347l-39.294-.001z"
        />
        <path fill="#E03636" d="M55 53.305H9l5.03-25.829h35.938z" />
        <ellipse fill="#B00505" cx="32" cy="53.304" rx="23" ry="4.347" />
        <path
          opacity=".3"
          fill="#F6BEC1"
          d="M51.6 52.953l-4.25-25.39h-30.7l-4.249 25.39a.958.958 0 0 0-.049.289c0 2.387 8.795 4.321 19.647 4.321 10.853 0 19.647-1.937 19.647-4.321a.991.991 0 0 0-.046-.289z"
        />
        <path
          fill="#E03636"
          d="M32 24c9.994 0 18.097 1.556 18.097 4.108 0 2.553-8.103 4.622-18.097 4.622-9.995 0-18.097-2.069-18.097-4.622C13.903 25.556 22.005 24 32 24z"
        />
        <path
          fill="#B00505"
          d="M17 29c-.014-.7.649-1.184 1.198-1.521.582-.35 1.208-.615 1.843-.847 1.279-.435 2.597-.734 3.921-.975 2.656-.478 5.346-.64 8.041-.658 2.683.018 5.383.18 8.033.656 1.324.242 2.642.541 3.924.975.635.231 1.261.499 1.843.848.549.336 1.207.821 1.197 1.522-.107-.673-.768-1.013-1.326-1.291-.594-.271-1.224-.459-1.861-.614-1.271-.329-2.579-.54-3.892-.685a70.07 70.07 0 0 0-7.925-.419 70.302 70.302 0 0 0-7.918.417c-1.312.146-2.618.356-3.891.686-.64.155-1.271.344-1.862.614-.558.279-1.221.619-1.325 1.292z"
          opacity=".5"
        />
        <ellipse opacity=".3" fill="#F6BEC1" cx="32" cy="41" rx="13" ry="13" />
        <path
          fill="#FDE0DA"
          d="M44 41l-7.419-1.855 4.085-6.812-6.811 4.087L32 29l-1.855 7.422-6.812-4.089 4.087 6.813L20 41l7.42 1.855-4.087 6.812 6.812-4.087L32 53l1.855-7.42 6.811 4.087-4.085-6.811z"
        />
        <path
          fill="#E03636"
          d="M14 22S-2.094 15.982 2.994 10.906C7.816 6.096 14 22 14 22zm36 0s16.094-6.018 11.006-11.094C56.184 6.096 50 22 50 22zM21.711 2c-3.702 0-4.971 6 5.188 18-.001 0 1.271-18-5.188-18zm20.578 0c3.702 0 4.971 6-5.188 18 .001 0-1.271-18 5.188-18z"
        />
      </svg>
    </div>
  );
}

export default connect({
  logo: props => ({
    width: '300px',
    height: '100px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    cursor: 'default',
    userSelect: 'none',
  }),
  emoji: props => ({
    display: 'inline-block',
    width: '80px',
    height: '80px',

    '> svg': {
      width: '100%',
      height: '100%',
    },
  }),
})(Logo);
