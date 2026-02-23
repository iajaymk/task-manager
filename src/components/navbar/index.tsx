import { Link } from "react-router";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import TaskForm from "../Task/TaskForm";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center gap-2 p-4 shadow-md w-full">
      <Link to="/">
        <p className="text-2xl">
          Task <span className="text-blue-400">Flow</span>
        </p>
      </Link>

      <div className="">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex items-center gap-1 px-2">
              <span className="text-[16px]">+</span>Add Task
            </Button>
          </DialogTrigger>
          <DialogContent showCloseButton={false}>
            <DialogHeader>
              <div className="">Add New Task</div>
            </DialogHeader>
            <TaskForm />
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
};

export default Navbar;
