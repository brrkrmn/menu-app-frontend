import {
  Box,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import ApproveButton from "common/buttons/ApproveButton";
import CancelButton from "common/buttons/CancelButton";
import React from "react";

const PopoverBase = ({ triggerElement, headerElement, bodyElement, approveButtonText }) => {
  const initRef = React.useRef();
  return (
    <Popover initialFocusRef={initRef}>
      {({ onClose }) => (
        <>
          <PopoverTrigger>{triggerElement}</PopoverTrigger>
          <PopoverContent w="fit-content">
            <PopoverArrow />
            {headerElement ? (
              <PopoverHeader w="fit-content" fontSize="sm">
                {headerElement}
              </PopoverHeader>
            ) : null}
            <PopoverBody display="flex" flexDirection="column" justifyContent="center" gap="12px">
              {bodyElement || null}
              <Box display="flex" justifyContent="center" gap="8px">
                <ApproveButton text={approveButtonText} />
                <CancelButton onClick={onClose} ref={initRef} />
              </Box>
            </PopoverBody>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
};

export default PopoverBase;
