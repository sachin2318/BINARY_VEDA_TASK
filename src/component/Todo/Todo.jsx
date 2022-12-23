import React, {  useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Box,
  chakra,
  Checkbox,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {todoActions} from "../../redux/Todo/action";
const Todo = ({ children, isOpen, close }) => {
  const [inputValue, setInputValue] = useState("");
  const state = useSelector((state) => state.TodoList);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
   if(inputValue.trim()){
    e.preventDefault();
    setInputValue("");
    let todo = [
      {
        value: inputValue,
        id: Math.random(),
        check: false,
      },
    ];
    let payload = [...state.data, ...todo];
    dispatch(todoActions.addTodo(payload));
   }else{
    e.preventDefault();
   }
  };

  const checkboxHandler = (item) => {
    let filterData = state.data.filter((e) => {
      if (e.id === item.id) {
        e.check = !e.check;
      }
      return e;
    });
    dispatch(todoActions.checkedTodo(filterData));
  };


  return (
    <>
      <Popover isOpen={isOpen} onClose={close} placement="right">
        <PopoverTrigger>{children}</PopoverTrigger>
        <PopoverContent w={["250px","450px"]}>
          <PopoverArrow />
          <PopoverCloseButton mt={"11px"} bg={"antiquewhite"} w={35} h={35} />
          <PopoverHeader fontSize={"32px"} color={"black"}>
            Today
          </PopoverHeader>
          <PopoverBody h={"250px"} overflowY={"scroll"}>
            {state.data?.map((item, index) => {
              return (
                <Box key={index} m={"10px"} >
                  <Checkbox
                    key={index}
                    value={item.check}
                    onChange={(e) => {
                      checkboxHandler(item);
                    }}
                  >
                    <chakra.p
                      className={item.check ? "todoItemChecked" : "todoItem"}
                    >
                      {item.value}
                    </chakra.p>
                  </Checkbox>
                </Box>
              );
            })}
          </PopoverBody>
          <PopoverFooter>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={inputValue}
                placeholder="New Todo"
                onChange={handleChange}
                className="inputBar"
              />
            </form>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  );
};
export default Todo;
