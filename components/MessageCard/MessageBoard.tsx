import React, {PropsWithChildren} from "react";
import Masonry from '@mui/lab/Masonry';

type MessageBoardProps = PropsWithChildren<{}>

export default function MessageBoard({children}: MessageBoardProps) {
    if (children == null)
        return null;

    return <Masonry columns={3} spacing={3}>
        {children}
    </Masonry>
}