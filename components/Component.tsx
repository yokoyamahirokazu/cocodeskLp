import Button from '@components/Button';

export const Component: React.FC = () => {
  return (
    <>
      <div>
        <Button expand="block" color="primary" size="small" types="link" linkTo="#">
          お問い合わせ
        </Button>
      </div>
      <div>
        <Button expand="block" color="primary" size="default" types="link" linkTo="#">
          ボタン
        </Button>
      </div>
      <div>
        <Button expand="block" color="primary" size="large" types="link" linkTo="#">
          ボタン
        </Button>
      </div>
      <div>
        <Button expand="block" fill="outline" color="primary" size="small" types="link" linkTo="#">
          ボタン
        </Button>
      </div>
      <div>
        <Button
          expand="block"
          fill="outline"
          color="primary"
          size="default"
          types="link"
          linkTo="#"
        >
          ボタン
        </Button>
      </div>
      <div>
        <Button expand="block" fill="outline" color="primary" size="large" types="link" linkTo="#">
          ボタン
        </Button>
      </div>
      <div style={{ background: '#000' }}>
        <div>
          <Button expand="block" color="white" size="small" types="link" linkTo="#">
            ボタン
          </Button>
        </div>
        <div>
          <Button expand="block" color="white" size="default" types="link" linkTo="#">
            ボタン
          </Button>
        </div>
        <div>
          <Button expand="block" color="white" size="large" types="link" linkTo="#">
            ボタン
          </Button>
        </div>
        <div>
          <Button expand="block" fill="outline" color="white" size="small" types="link" linkTo="#">
            ボタン
          </Button>
        </div>
        <div>
          <Button
            expand="block"
            fill="outline"
            color="white"
            size="default"
            types="link"
            linkTo="#"
          >
            ボタン
          </Button>
        </div>
        <div>
          <Button expand="block" fill="outline" color="white" size="large" types="link" linkTo="#">
            ボタン
          </Button>
        </div>
      </div>
    </>
  );
};
