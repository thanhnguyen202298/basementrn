import React from 'react';
/// transfer props from top to any End components
export const ContextPool = React.createContext({ name: "", description: "" })
type people = {
  name: string, description: string
}

export const propsvalue: people = { name: "day la ten trang", description: "noi dung trnag o day nek" }
