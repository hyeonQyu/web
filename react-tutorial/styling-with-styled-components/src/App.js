import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Dialog from './components/Dialog';

const AppBlock = styled.div`
    width: 512px;
    margin: 0 auto;
    margin-top: 4rem;
    border: 1px solid black;
    padding: 1rem;
`;

const ButtonGroup = styled.div`
    & + & {
        margin-top: 1rem;
    }
`;

const palette = {
    blue: '#228be6',
    gray: '#496057',
    pink: '#f06595',
};

function App() {
    const [dialog, setDialog] = useState(false);
    const onClick = () => {
        setDialog(true);
    };
    const showDialog = (dialog) => setDialog(dialog);

    return (
        <ThemeProvider
            theme={{
                palette,
            }}
        >
            <>
                <AppBlock>
                    <ButtonGroup>
                        <Button size="large" onClick={onClick}>
                            삭제
                        </Button>
                        <Button color="gray">BUTTON</Button>
                        <Button color="pink" size="small">
                            BUTTON
                        </Button>
                    </ButtonGroup>

                    {/*<ButtonGroup>*/}
                    {/*    <Button size="large" outline>*/}
                    {/*        BUTTON*/}
                    {/*    </Button>*/}
                    {/*    <Button color="gray" outline>*/}
                    {/*        BUTTON*/}
                    {/*    </Button>*/}
                    {/*    <Button color="pink" size="small" outline>*/}
                    {/*        BUTTON*/}
                    {/*    </Button>*/}
                    {/*</ButtonGroup>*/}

                    {/*<ButtonGroup>*/}
                    {/*    <Button size="large" outline fullWidth>*/}
                    {/*        BUTTON*/}
                    {/*    </Button>*/}
                    {/*    <Button color="gray" outline fullWidth>*/}
                    {/*        BUTTON*/}
                    {/*    </Button>*/}
                    {/*    <Button color="pink" size="small" outline fullWidth>*/}
                    {/*        BUTTON*/}
                    {/*    </Button>*/}
                    {/*</ButtonGroup>*/}
                </AppBlock>

                <Dialog
                    title="정말로 삭제하시겠습니까?"
                    confirmText="삭제"
                    cancelText="취소"
                    visible={dialog}
                    show={showDialog}
                >
                    데이터를 정말로 삭제하시겠습니까?
                </Dialog>
            </>
        </ThemeProvider>
    );
}

export default App;
