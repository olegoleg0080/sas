import { useDispatch, useSelector } from "react-redux"
import { showBurgerModalSelector, showLoginModalSelector, showRedactModalSelector} from "../../redux/selectors"
import { tornBurgerModal, tornLoginModal, tornRedactModal} from "../../redux/slice"
import { BurgerModal } from "./BurgerModal"
import { LoginModal } from "./LoginModal"
import { RedactModal } from "./RedactModal"
// import { LoginModal } from "./LoginModal"

export const RootModal = ()=>{
    const dispatch = useDispatch()
    const isShowBurgerModal = useSelector(showBurgerModalSelector)
    const isShowLoginModal = useSelector(showLoginModalSelector)
    const isShowRedactModal = useSelector(showRedactModalSelector)
    const onCloseBurgerModal = ()=>{dispatch(tornBurgerModal())}
    const onCloseLoginModal = ()=>{dispatch(tornLoginModal())}
    const onCloseRedactModal = ()=>{dispatch(tornRedactModal())}

    return (
        <>
            <BurgerModal  isOpen={isShowBurgerModal} onClose={onCloseBurgerModal}/>
            <LoginModal  isOpen={isShowLoginModal} onClose={onCloseLoginModal}/>
            <RedactModal isOpen={isShowRedactModal} onClose={onCloseRedactModal}/>
        </>
       
    ) 
}