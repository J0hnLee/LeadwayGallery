import { useAuth0 } from "@auth0/auth0-react"; //import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

const SecretPage = () => {
  const { isAuthenticated } = useAuth0();

  // 根據使用者是否登陸來決定要顯示的內容
  let content;
  if (isAuthenticated) {
    content = <div>已登入</div>;
  } else {
    content = <div>未登入</div>;
  }

  return <div>{content}</div>;
};

export default SecretPage;
